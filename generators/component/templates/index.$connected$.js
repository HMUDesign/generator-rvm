import { connect } from 'ylem';

import Store from './<%= fileName %>.store';
import Component from './<%= fileName %>.view';
export default connect(Store)(Component);

export * from './<%= fileName %>.view';
