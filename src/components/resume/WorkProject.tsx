import {
  DetailUl,
  Detail,
  PjTitle,
  PExplain,
  PjTech,
  PjTitleHover,
  StyledPjContainer,
} from '#src/styles/aboutStyle';
import { IWorkProject } from '#src/type/about';
import CustomLink from '#components/common/CustomLink';

export default function WorkProject(pj: IWorkProject) {
  return (
    <StyledPjContainer>
      {pj.link ? (
        <CustomLink href={pj.link}>
          <PjTitleHover>{pj.title} 🔗</PjTitleHover>
        </CustomLink>
      ) : (
        <PjTitle> {pj.title}</PjTitle>
      )}
      <PExplain>{pj.description}</PExplain>
      {pj.tech?.map(t => (
        <PjTech key={t}>{t}</PjTech>
      ))}
      {pj.details && (
        <DetailUl>
          {pj.details.map((det, idx) => (
            <Detail key={idx}>{det} </Detail>
          ))}
        </DetailUl>
      )}
    </StyledPjContainer>
  );
}
