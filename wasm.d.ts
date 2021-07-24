import { ASUtil } from '@assemblyscript/loader';
import * as dist from './dist';

declare const muphy: ASUtil & (typeof dist);

export default muphy;
