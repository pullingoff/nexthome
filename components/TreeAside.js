import CustomLink from "./CustomLink"

export default function TreeAside({ tree }) {
    return (
        <div>
            {tree.map(t=> (
                <div key ={t.title}>
                    <CustomLink href={t.urlPath}>
                        {t.title}
                    </CustomLink>
                    {t.children && t.children.length > 0 && (
                        <>
                        {t.children.map(c => (
                            <CustomLink key={c.title} href={c.urlPath}>
                                
                                {c.title}
                                
                            </CustomLink>
                            ))}
                        </>
                    )}
                </div>
            ))}
        </div>   
    )
}