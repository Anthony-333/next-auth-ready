import Auth0Provider from "next-auth/providers/auth0";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import InstagramProvider from "next-auth/providers/instagram";

const ProviderTypes = (process.env.PROVIDER_TYPES || "").split(",");

const providers = [];

// Helper function to get environment variable or throw an error
const getEnvVar = (varName: string): string => {
  const value = process.env[varName];
  if (!value) {
    throw new Error(`Environment variable ${varName} is not defined`);
  }
  return value;
};

if (ProviderTypes.includes("Auth0")) {
  providers.push(
    Auth0Provider({
      clientId: getEnvVar("AUTH0_CLIENT_ID"),
      clientSecret: getEnvVar("AUTH0_CLIENT_SECRET"),
      issuer: getEnvVar("AUTH0_ISSUER"),
    })
  );
}

if (ProviderTypes.includes("Email")) {
  providers.push(
    EmailProvider({
      server: getEnvVar("EMAIL_SERVER"),
      from: getEnvVar("EMAIL_FROM"),
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    })
  );
}

if (ProviderTypes.includes("Facebook")) {
  providers.push(
    FacebookProvider({
      clientId: getEnvVar("FACEBOOK_CLIENT_ID"),
      clientSecret: getEnvVar("FACEBOOK_CLIENT_SECRET"),
    })
  );
}

if (ProviderTypes.includes("Google")) {
  providers.push(
    GoogleProvider({
      clientId: getEnvVar("GOOGLE_CLIENT_ID"),
      clientSecret: getEnvVar("GOOGLE_CLIENT_SECRET"),
    })
  );
}

if (ProviderTypes.includes("Instagram")) {
  providers.push(
    InstagramProvider({
      clientId: getEnvVar("INSTAGRAM_CLIENT_ID"),
      clientSecret: getEnvVar("INSTAGRAM_CLIENT_SECRET"),
    })
  );
}

export const authOptions = {
    providers
  };

export { ProviderTypes, providers };
