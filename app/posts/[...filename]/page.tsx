import Post from "./client-page";
import client from "../../../tina/__generated__/client";

// Force dynamic rendering to avoid build-time data fetching
export const dynamic = 'force-dynamic';

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {

  const data = await client.queries.post({
    relativePath: `${params.filename}.md`,
  });

  return (
    <Post {...data}></Post>
  );
}