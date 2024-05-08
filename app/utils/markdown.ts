// post content에서 ## 찾아서 헤딩 구성 (목차용)
export const getHeadings = (source: string) => {
  const regex = /^## (.*$)/gim;
  if (source.match(regex)) {
    return source.match(regex)?.map((heading) => {
      const headingText = heading.replace("## ", "");
      // ?가 있을 경우 무한으로 링크가 붙어 필터링
      const link =
        "#" + headingText.replace("?", "").replace(/ /g, "-").toLowerCase();

      return {
        text: headingText,
        link,
      };
    });
  }
};
