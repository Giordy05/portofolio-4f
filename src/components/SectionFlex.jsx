import React from "react";
import Item from "./Item";
import { ItemData } from "../data.js";

const SectionFlex = () => {
    const articleData = ItemData.filter(item => item.tag === 'article').slice(0, 5);

    return(
        <section className="section">
            {
                articleData.map(item => <Item key={`article-${item.id}`} data={item} />)
            }
        </section>
    )
}

export default SectionFlex;