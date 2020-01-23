import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import withStyleInjections from './withStyleInjections';
import ServicesPagePreview from './preview-templates/ServicesPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewTemplate('index', withStyleInjections(IndexPagePreview));
CMS.registerPreviewTemplate('services', withStyleInjections(ServicesPagePreview));
CMS.registerPreviewTemplate('about', withStyleInjections(AboutPagePreview));
CMS.registerPreviewTemplate('blog', withStyleInjections(BlogPostPreview));
