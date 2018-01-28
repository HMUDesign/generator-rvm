<%- makeComponent
? `${makeViewModel
? `import { connect } from 'react-view-model';

import ViewModel from './${fileName}.viewmodel';
import { ${componentName} } from './${fileName}.component';
export default connect(ViewModel)(${componentName});

` : `import { ${componentName} } from './${fileName}.component';
export default ${componentName};

`}export * from './${fileName}.component';
`
: `${makeStyled
? `export * from './${fileName}.styled';
`
: ""}` -%>
