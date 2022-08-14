import * as S from '#src/styles/aboutStyle';
import { IWorkProject } from '#src/type/about';
import CustomLink from '#components/common/CustomLink';

export default function WorkProject(pj: IWorkProject) {
  return (
    <S.StyledPjContainer>
      {pj.link ? (
        <CustomLink href={pj.link}>
          <S.PjTitleHover>{pj.title} 🔗</S.PjTitleHover>
        </CustomLink>
      ) : (
        <S.PjTitle> {pj.title}</S.PjTitle>
      )}
      <S.PExplain>{pj.description}</S.PExplain>
      {pj.tech?.map(t => (
        <S.PjTech key={t}>{t}</S.PjTech>
      ))}
      {pj.details && (
        <S.DetailUl>
          {pj.details.map((det, idx) => (
            <S.Detail key={idx}>{det} </S.Detail>
          ))}
        </S.DetailUl>
      )}
    </S.StyledPjContainer>
  );
}
