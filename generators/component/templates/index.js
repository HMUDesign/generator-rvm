<%- makeComponent && makeViewModel ?
`import { connect } from 'react-view-model';

import ViewModel from './${fileName}.viewmodel';
import Component from './${fileName}.component';
export default connect(ViewModel)(Component);

export * from './${fileName}.component'
` : '' -%>
<%- makeComponent && !makeViewModel ?
`import Component from './${fileName}.component';
export default Component;

export * from './${fileName}.component';
` : '' -%>
<%- !makeComponent && !makeViewModel && makeStyled ?
`export * from './${fileName}.styled';
` : '' -%>
