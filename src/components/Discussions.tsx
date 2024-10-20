import Giscus from "@giscus/react";
import { useTheme } from "./theme-provider";
import { Card, CardTitle } from "./ui/card";

export const Discussions = ()=>{
  const { theme } = useTheme();
  return (
    <Card className="border-none shadow-none w-full mt-10 p-3">
      <CardTitle className="text-center font-poppins overline text-2xl mb-2 text-gray-700 dark:text-primary">Discussion</CardTitle>
      <Giscus
        id="comments"
        repo={`${process.env.USERNAME}/${process.env.REPO}`}
        repoId={process.env.REPO_ID || ''}
        category="General"
        categoryId={process.env.CATEGORY_ID}
        mapping="title"
        term="Welcome to Discussions"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme={theme == "dark" ? "noborder_gray" : "light_tritanopia"}
        lang="en"
        loading="lazy"
      />
    </Card>
  )
}