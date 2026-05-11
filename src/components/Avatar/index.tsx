import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import { normalizeAssetUrl } from '@/helpers/sanitize';
import './index.less';

export const Avatar = ({
  avatarSrc,
  className,
  shape = 'circle',
  size = 'default',
}) => {
  const avatarUrl = normalizeAssetUrl(avatarSrc);
  const wrapperClassName = [
    'avatar',
    className && className !== 'avatar' ? className : '',
    !avatarUrl ? 'avatar-hidden' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClassName}>
      {avatarUrl ? (
        <AntdAvatar
          className="avatar-image"
          src={avatarUrl}
          shape={shape as any}
          size={size as any}
        />
      ) : (
        <span className="avatar-upload-tip">头像地址为空</span>
      )}
    </div>
  );
};
