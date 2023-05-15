import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

const BrandsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const CenterBrand = styled.div`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;

  @media (min-width: ${props => props.theme.breakpoints.values.md}px) {
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
  }
`;

const BrandsGrid = ({ brands, centerBrand }) => (
  <BrandsContainer>
    {centerBrand && (
      <CenterBrand>
        <Box display="flex" alignItems="center" height="100%">
          <Box width="100%">
            <PreviewCompatibleImage
              imageInfo={{ image: centerBrand, alt: 'Ruimte voor jouw bedrijf' }}
              style={{
                maxWidth: 150,
                objectFit: 'contain',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </Box>
        </Box>
      </CenterBrand>
    )}
    {brands.map(brand => (
      <Box display="flex" alignItems="center" height="100%" key={brand.name}>
        <Box width="100%">
          <PreviewCompatibleImage
            imageInfo={{ image: brand.image, alt: brand.name }}
            style={{
              maxWidth: 150,
              objectFit: 'contain',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </Box>
      </Box>
    ))}
  </BrandsContainer>
);

BrandsGrid.propTypes = {
  brands: PropTypes.array,
  centerBrand: PropTypes.object,
};

BrandsGrid.defaultProps = {
  brands: [],
  centerBrand: null,
};

export default BrandsGrid;
