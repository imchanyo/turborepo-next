"use client";

 
import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";
import React from "react";

export const Hydrate = (props: HydrateProps) => {
  return <RQHydrate {...props} />;
}


