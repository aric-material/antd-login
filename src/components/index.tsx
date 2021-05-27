import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FormBuilder from 'antd-form-builder';
import { Form, Button } from 'antd';

export type Props = { className: string; value: object; onChange: Function };

const CLASS_NAME = 'antd-login';

export default class AntdLogin extends Component<Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.object,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };

  handleFinish = (inEvent) => {
    console.log('click me!', inEvent);
  };

  render() {
    const meta = {
      fields: [
        { key: 'username', label: 'User Name', widgetProps: { autoComplete: 'off' } },
        { key: 'password', label: 'Password', widget: 'password' }
      ]
    };

    const { className, value, onChange, ...props } = this.props;

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...props}>
        <Form onFinish={this.handleFinish}>
          <FormBuilder meta={meta} />
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
