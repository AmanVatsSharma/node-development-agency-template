/**
 * Team Management Page
 * 
 * Manage team member profiles
 */

'use client';

import React, { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, Search, Save, X, Users, Mail, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Badge } from '@/app/components/ui/badge';
import { Label } from '@/app/components/ui/label';

type TeamMember = {
  id: string;
  name: string;
  position: string;
  bio: string;
  avatar: string;
  order: number;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  website?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function TeamAdminPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/team');
      if (response.ok) {
        const data = await response.json();
        setMembers(data.members || []);
      }
    } catch (error) {
      console.error('[Team] Error loading:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (member: TeamMember) => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/team', {
        method: member.id && member.id !== 'new' ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(member),
      });
      
      if (response.ok) {
        await loadMembers();
        setEditingMember(null);
        setCreating(false);
      }
    } catch (error) {
      console.error('[Team] Error saving:', error);
      alert('Failed to save team member. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;
    
    try {
      const response = await fetch(`/api/admin/team?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await loadMembers();
      }
    } catch (error) {
      console.error('[Team] Error deleting:', error);
      alert('Failed to delete team member. Please try again.');
    }
  };

  const handleCreate = () => {
    setCreating(true);
    setEditingMember({
      id: 'new',
      name: '',
      position: '',
      bio: '',
      avatar: '',
      order: members.length,
      active: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Users className="h-8 w-8 text-cyan-600" />
            Team Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage team member profiles and information
          </p>
        </div>
        <Button onClick={handleCreate} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Member
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Badge variant="secondary">
              {filteredMembers.length} {filteredMembers.length === 1 ? 'Member' : 'Members'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-cyan-600 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading team members...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <div className="w-24 h-24 mx-auto bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    {member.avatar ? (
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="h-12 w-12 text-slate-400" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {member.position}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant={member.active ? 'success' : 'secondary'} className="text-xs">
                      {member.active ? 'Active' : 'Inactive'}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Order: {member.order}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => setEditingMember(member)}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(member.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {editingMember && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {creating ? 'Add Team Member' : 'Edit Team Member'}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingMember(null);
                    setCreating(false);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={editingMember.name}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, name: e.target.value })
                    }
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position/Title</Label>
                  <Input
                    id="position"
                    value={editingMember.position}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, position: e.target.value })
                    }
                    placeholder="Senior Developer"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={editingMember.bio}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, bio: e.target.value })
                  }
                  placeholder="Brief biography..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="avatar">Avatar URL</Label>
                <Input
                  id="avatar"
                  value={editingMember.avatar}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, avatar: e.target.value })
                  }
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                  <Input
                    id="linkedIn"
                    value={editingMember.linkedIn || ''}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, linkedIn: e.target.value })
                    }
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
                <div>
                  <Label htmlFor="twitter">Twitter Profile</Label>
                  <Input
                    id="twitter"
                    value={editingMember.twitter || ''}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, twitter: e.target.value })
                    }
                    placeholder="https://twitter.com/..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input
                    id="github"
                    value={editingMember.github || ''}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, github: e.target.value })
                    }
                    placeholder="https://github.com/..."
                  />
                </div>
                <div>
                  <Label htmlFor="website">Personal Website</Label>
                  <Input
                    id="website"
                    value={editingMember.website || ''}
                    onChange={(e) =>
                      setEditingMember({ ...editingMember, website: e.target.value })
                    }
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="order">Display Order</Label>
                <Input
                  id="order"
                  type="number"
                  value={editingMember.order}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, order: parseInt(e.target.value) || 0 })
                  }
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="active"
                  checked={editingMember.active}
                  onChange={(e) =>
                    setEditingMember({ ...editingMember, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-slate-300"
                />
                <Label htmlFor="active" className="cursor-pointer">
                  Active Team Member
                </Label>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Button
                  onClick={() => handleSave(editingMember)}
                  disabled={saving}
                  className="flex-1"
                >
                  {saving ? 'Saving...' : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Member
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditingMember(null);
                    setCreating(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
