import { createContext, useContext } from 'react';

const ImageLightboxContext = createContext({ openImage: () => {} });

export const useImageLightbox = () => useContext(ImageLightboxContext);

export default ImageLightboxContext;
