import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialText extends Component {
  render() {
    return this.props.socialItems.map((item) => (
      <li key={item.id} className={`${this.props.listAlign} mx-2`}>
        <a 
          href={item.href} 
          alt={item.alt}
          className={`${this.props.className}`}>
          <FontAwesomeIcon 
            className="mr-1" 
            icon={[`fab`, `${item.icon}`]}
            />
            &nbsp;{item.text}
        </a>
      </li>
    ));
  }
}

export default SocialText;
