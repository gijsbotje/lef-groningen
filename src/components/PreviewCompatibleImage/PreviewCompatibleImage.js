import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const PreviewCompatibleImage = ({ imageInfo, style }) => {
  const { alt = '', title, childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={style}
        alt={alt}
        title={title || alt}
      />
    );
  }

  if (childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={style}
        alt={alt}
        title={title || alt}
      />
    );
  }

  if (!!image && typeof image === 'string') {
    return <img style={style} src={image} alt={alt} title={title || alt} />;
  }

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    title: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
  style: PropTypes.object,
};

PreviewCompatibleImage.defaultProps = {
  style: null,
};

export default PreviewCompatibleImage;
