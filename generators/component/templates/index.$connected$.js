import { connect } from 'ylem';

import View from './<%= fileName %>.view';
import Store from './<%= fileName %>.store';
export default connect(Store)(View);

export * from './<%= fileName %>.view';
