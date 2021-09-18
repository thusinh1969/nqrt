import React, { setState, Component } from 'react';
import axios from "axios";

import RecSysShow from './recsys_show.jsx'

import 'antd/dist/antd.css';
import { Upload, Button, Space,  message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

class UploadSingleImage extends Component {
  
  constructor(props) {
    super();
    this.state = {
      uploading: false,
      fileList: [],
      prediction_status: 0,
      clickStatus: "ui active button",
      actionTextButton: "Bắt đầu",
      response: null,
      dropBox: null
    }
    const img = {
      display: 'flex',
      width: 'auto',
      height: '100%',
      align: 'center',
    };    
    const maxSize_img = 5*1024*1024
    const accept_type  = 'image/jpeg,image/png,image/jpg,image/gif'

    this.thums = this.thumbs.bind(this)
    this.callPredictions = this.callPredictions.bind(this)

  }

  thumbs = (files) => {
    console.log('Call thumb display', files)
    if (files !== null) {
        if (this.state.fileList.length > 0) {
            return (
                <div class="column center">
                <img class="ui large centered image" src={this.state.fileList[0].preview}></img>
            </div>
            )
        }
    }
    return null
  };

  async callPredictions () {
    console.log('Call prediction - disable button')

    let formdata = new FormData();
    formdata.append("images",  this.state.fileList[0]);

    try {
      const res = await axios.post('http://192.168.1.18:8088/recsys', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
        },
      })
      console.log('PREDICTION thành công !!!', res['data'])

      //console.log(res['data'])
      const recsys_images_Param = res['data']['data'].map((item) => {
            return item
        })

      const dropBoxParam = recsys_images_Param.map((item, index) => {
            return {'value': index, 'label': item['type']}
        })
      console.log('Set DROPBOX', dropBoxParam)
      this.setState({dropBox:dropBoxParam})
      this.setState({recsys_images_:recsys_images_Param})

      }
      catch(err) {
          console.log(err)
        }
    }

render() {
  const { uploading, fileList } = this.state;
  const props = {
      onRemove: file => {
        this.setState(state => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        // Check file type
        const correctFileType = this.accept_type.split(',').includes(file.type)
        if (!correctFileType) {
          message.error (`${file.name} không phải là tập tin ảnh !`)
          return false
        }
        else {
          this.setState(state => ({
            fileList: [...this.state.fileList, file],
          }));
          return false;
        }
      },
      fileList,
      maxCount: 1,
    };
  
  return (
    <container>
          <Upload {...props}>
              <Button icon={<UploadOutlined />}>
                Kéo thả tập tin ảnh hay bấm vào đây để chọn hình ảnh
              </Button>
          </Upload>
          {this.thumbs(this.state.fileList)}
          <Button
            type="primary"
            onClick={this.callPredictions}
            disabled={this.state.fileList.length === 0}
            loading={this.state.uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? 'Đang tính toán' : 'Bắt đầu'}
          </Button>
          <br/>
          <hr/>
          <section>
              {<RecSysShow res={this.state.response} dropBoxParam={this.state.dropBox}/>} 
          </section>
    </container>
      
    )
  }
}
export default UploadSingleImage;