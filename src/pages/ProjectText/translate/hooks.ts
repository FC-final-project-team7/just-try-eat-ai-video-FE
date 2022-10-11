import { makeUseTranslate } from '~/hooks/useTranslate';

import * as TranslateData from './';

export const { useTranslate, tk } = makeUseTranslate(TranslateData, 'KO');
