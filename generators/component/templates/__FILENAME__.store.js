import { Object as ObserveObject } from 'can-observe';
import PropTypes from 'prop-types';

export default class <%= componentName %>Store extends ObserveObject {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  get name() {
    return `<%= componentName %> (${this.id})`;
  }
}
