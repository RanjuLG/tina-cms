import PostList from "./post-list";
import { client } from "../../tina/__generated__/client";

// Force dynamic rendering to avoid build-time data fetching
export const dynamic = 'force-dynamic';

export default async function Page() {
  const pages = await client.queries.postConnection();

  return <PostList {...pages} />;
}
