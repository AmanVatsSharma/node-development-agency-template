"use client";

import React from "react";
import { cn } from "@/app/lib/cn";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconWorld,
  IconDeviceDesktop,
  IconBuildingSkyscraper,
  IconRocket,
  IconShoppingCart,
  IconPackage,
  IconBuildingStore,
  IconRobot,
  IconMicrophone,
  IconBrandWhatsapp,
  IconChartBar,
  IconChartLine,
  IconSearch,
  IconList,
} from "@tabler/icons-react";

export type ServiceIconKey =
  | "react"
  | "nextjs"
  | "world"
  | "desktop"
  | "building"
  | "rocket"
  | "shoppingCart"
  | "package"
  | "store"
  | "robot"
  | "microphone"
  | "whatsapp"
  | "chartBar"
  | "chartLine"
  | "search"
  | "list";

const ICONS: Record<ServiceIconKey, React.ComponentType<any>> = {
  react: IconBrandReact,
  nextjs: IconBrandNextjs,
  world: IconWorld,
  desktop: IconDeviceDesktop,
  building: IconBuildingSkyscraper,
  rocket: IconRocket,
  shoppingCart: IconShoppingCart,
  package: IconPackage,
  store: IconBuildingStore,
  robot: IconRobot,
  microphone: IconMicrophone,
  whatsapp: IconBrandWhatsapp,
  chartBar: IconChartBar,
  chartLine: IconChartLine,
  search: IconSearch,
  list: IconList,
};

export function ServiceIcon({
  iconKey,
  emoji,
  size = 20,
  className,
}: {
  iconKey?: ServiceIconKey;
  emoji?: string;
  size?: number;
  className?: string;
}) {
  if (iconKey && ICONS[iconKey]) {
    const IconComp = ICONS[iconKey];
    return <IconComp size={size} className={cn("inline-block", className)} />;
  }

  if (emoji) {
    return (
      <span
        className={cn("inline-block align-middle", className)}
        style={{ fontSize: `${size}px`, lineHeight: 1 }}
        aria-hidden="true"
      >
        {emoji}
      </span>
    );
  }

  return <IconPackage size={size} className={cn("inline-block", className)} />;
}

