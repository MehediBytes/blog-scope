"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export default function KindeProviderWrapper({ children }) {
    return <KindeProvider
        domain={process.env.KINDE_ISSUER_URL}
        clientId={process.env.KINDE_CLIENT_ID}
        redirectUri="http://localhost:3000"
    >{children}</KindeProvider>;
}
