const authConfig = {
  providers: [
    {
      domain: process.env.CLERK_APP_DOMAIN,
      applicationID: "convex",
    },
  ],
};

export default authConfig;