import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {Input ,Upload, Icon, Modal, Button} from 'antd'
import './question.css';

const { TextArea } = Input;

// const question1 = () => 
// <div className="container" style={{padding:20}}>
//   <h2>提问题</h2>
//   <div>
//     <div className="form-item">
//       <Input size="large" placeholder="标题" />
//     </div>
//     <div className="form-item">
//       <TextArea autosize={{ minRows: 5, maxRows: 30 }} placeholder="描述问题" />
//     </div>
//   </div>
// </div>

class question extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };
  handleCancel = () => this.setState({ previewVisible: false }) 

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <div className="container" style={{padding:20}}>
        <h2>提问题</h2>
        <div>
          <div className="form-item">
            <Input size="large" placeholder="标题" />
          </div>
          <div className="form-item">
            <TextArea autosize={{ minRows: 5, maxRows: 30 }} placeholder="描述问题" />
          </div>
          <div className="form-item">
            <span>上传图片</span>
            <div className="clearfix" style={{textAlign:'left'}}>
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
            </div>
          </div>
          <div className="form-item">
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </div>
        </div>
      </div>
      
    );
  }

}

export default question