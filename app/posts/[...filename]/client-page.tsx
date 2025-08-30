"use client";
import { tinaField, useTina } from "tinacms/dist/react";
// Using any for now due to type generation issues
// import type { PostQuery } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: any; // Temporarily using any instead of PostQuery
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const content = data.post.body;
  return (
    <>
      <h1 data-tina-field={tinaField(data.post, "title")}>
        {data.post.title}
      </h1>
      <div data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown content={content} />
      </div>
    </>
  );
}
