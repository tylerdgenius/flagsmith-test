"use client";

import { createFlagsmithInstance } from "flagsmith/isomorphic";
import { FlagsmithProvider, IState } from "flagsmith/react";
import { useRef } from "react";

export const FeatureFlagProvider: React.FC<{ children: React.ReactNode, serverState: IState }> = ({
  children,
  serverState
}) => {
  const flagsmithInstance = useRef(createFlagsmithInstance());

  return (
    <FlagsmithProvider flagsmith={flagsmithInstance.current} serverState={serverState}>
      <>{children}</>
    </FlagsmithProvider>
  );
};
