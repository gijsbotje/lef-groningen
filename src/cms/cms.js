import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import withStyleInjections from './withStyleInjections';
import AndersDenkenPreview from './preview-templates/AndersDenkenPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewTemplate('index', withStyleInjections(IndexPagePreview));
CMS.registerPreviewTemplate('about', withStyleInjections(AboutPagePreview));
CMS.registerPreviewTemplate('blog', withStyleInjections(BlogPostPreview));
CMS.registerPreviewTemplate('andersDenken', withStyleInjections(AndersDenkenPreview));
