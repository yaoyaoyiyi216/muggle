import React, { FC } from 'react'
import { UploadFile } from './index'
import Icon from '../Icon'
import Progress from '../Progress'
interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove,
  } = props

  return (
    <ul className="upload-list">
      {fileList.map(item => {
        return (
          <li className="upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-lines" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <Icon icon="spinner" spin theme="primary" />}
              {item.status === 'success' && <Icon icon="circle-check" theme="success" />}
              {item.status === 'error' && <Icon icon="circle-xmark" theme="danger" />}
            </span>
            <span className="file-actions">
              <Icon icon="xmark" onClick={() => { onRemove(item)}}/>
            </span>
            {item.status === 'uploading' && 
              <Progress 
                percent={item.percent || 0}
              />
            }
          </li>
        )
      })}
    </ul>
  )

}

export default UploadList;