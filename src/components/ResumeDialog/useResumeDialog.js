import { createContext, useContext } from 'react';

const ResumeDialogContext = createContext({ openResumeDialog: () => {} });

export const useResumeDialog = () => useContext(ResumeDialogContext);

export default ResumeDialogContext;
