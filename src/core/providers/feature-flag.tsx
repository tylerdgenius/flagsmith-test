"use client";

import { createFlagsmithInstance } from "flagsmith/isomorphic";
import { FlagsmithProvider, IState } from "flagsmith/react";
import { useState } from "react";

export const FeatureFlagProvider: React.FC<{ children: React.ReactNode, serverState: IState }> = ({
  children,
  serverState
}) => {
  const [flagsmithInstance] = useState(() => createFlagsmithInstance());

  return (
    <FlagsmithProvider flagsmith={flagsmithInstance} serverState={serverState}>
      <>{children}</>
    </FlagsmithProvider>
  );
};
