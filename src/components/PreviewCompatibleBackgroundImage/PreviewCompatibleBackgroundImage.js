import React from 'react';
import PropTypes from 'prop-types';
import BackgroundImage from 'gatsby-background-image';

const PreviewCompatibleBackgroundImage = ({ imageInfo, ...rest }) => {
  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!image.childImageSharp.fluid) {
      return <BackgroundImage fluid={image.childImageSharp.fluid} alt={alt} {...rest} />;
    }
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!image.childImageSharp.fixed) {
      return <BackgroundImage fixed={image.childImageSharp.fixed} alt={alt} {...rest} />;
    }
  }

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!childImageSharp) {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!childImageSharp.fluid) {
      return <BackgroundImage fluid={childImageSharp.fluid} alt={alt} {...rest} />;
    }
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!childImageSharp.fixed) {
      return <BackgroundImage fixed={childImageSharp.fixed} alt={alt} {...rest} />;
    }
  }

  if (!!image && typeof image === 'string') {
    return <BackgroundImage src={image} alt={alt} {...rest} />;
  }

  return null;
};

PreviewCompatibleBackgroundImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleBackgroundImage;
