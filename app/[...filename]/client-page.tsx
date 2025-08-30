"use client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
// Using any for now due to type generation issues
// import type { PageQuery } from "../../tina/__generated__/types";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: any }; // Temporarily using any instead of PageQuery["page"]
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  return (
    <div data-tina-field={tinaField(data.page, "body")}>
      <TinaMarkdown content={content} />
    </div>
  );
}
