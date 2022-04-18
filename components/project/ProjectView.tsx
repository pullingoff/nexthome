
import { IProject } from "types"
import HeadContainer from "./HeadContainer"
import ArticleContainer from "./ArticleContainer"
import ImgGallery from "components/ImgGallery"

const ProjectView = ({pj} : {
    pj: IProject
}) => {
    return (
        <>
            <HeadContainer pj={pj}/>
            <ArticleContainer pj={pj}/>
            {
                pj.imgPathList &&
                <ImgGallery imgList={pj.imgPathList}/>
            }
        </>
    )
}

export default ProjectView