import ClientPage from "./client-page";
import client from "../../tina/__generated__/client";

// Force dynamic rendering to avoid build-time data fetching
export const dynamic = 'force-dynamic';

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });

  return <ClientPage {...data} />;
}
