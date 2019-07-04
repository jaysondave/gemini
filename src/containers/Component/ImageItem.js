import React from 'react';

const ImageItem = ({ data }) => {
    const { image, url, publishDate, expiryDate } = data;
    return (
        <li className="col-lg-12 col-sm-12 col-xs-12 articles">
            <span className="article-image jr-link">
                <img onClick={() => window.open(url, "_blank")} src={image} alt="Articales Post" />
            </span>

            <div className="article-description">
                <a href={url} target={'_blank'}><span className="jr-link">{url}</span></a>
                <div className="meta-wrapper">
                    <span className="meta-date"><i
                        className="zmdi zmdi-calendar-note zmdi-hc-lg" />{publishDate}</span>
                </div>
            </div>
        </li>
    );
}

export default ImageItem;