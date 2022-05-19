import React from 'react';
import {HiOutlineScale} from 'react-icons/hi';
import {BiBook, BiQuestionMark} from 'react-icons/bi';
import {FiCreditCard, FiChevronDown} from 'react-icons/fi';
import {RiHomeLine, RiShipLine, RiWalletLine} from 'react-icons/ri';
import {MdOutlineStickyNote2, MdOutlineHeadsetMic} from 'react-icons/md';
import {BsDot, BsArrowRight} from 'react-icons/bs';
import {
  AiOutlineTag,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineFolderOpen,
} from 'react-icons/ai';

const Icon = ({name = 'error', color, size = 20}) => {
  return (
    <>
      {name === 'dot' && <BsDot color={color} size={size} />}
      {name === 'book' && <BiBook color={color} size={size} />}
      {name === 'ship' && <RiShipLine color={color} size={size} />}
      {name === 'tag' && <AiOutlineTag color={color} size={size} />}
      {name === 'bell' && <AiOutlineBell color={color} size={size} />}
      {name === 'home' && <RiHomeLine color={color} size={size} />}
      {name === 'user' && <AiOutlineUser color={color} size={size} />}
      {name === 'wallet' && <RiWalletLine color={color} size={size} />}
      {name === 'scale' && <HiOutlineScale color={color} size={size} />}
      {name === 'error' && <BiQuestionMark color={color} size={size} />}
      {name === 'setting' && <AiOutlineSetting color={color} size={size} />}
      {name === 'credit-card' && <FiCreditCard color={color} size={size} />}
      {name === 'arrow-right' && <BsArrowRight color={color} size={size} />}
      {name === 'note' && <MdOutlineStickyNote2 color={color} size={size} />}
      {name === 'folder' && <AiOutlineFolderOpen color={color} size={size} />}
      {name === 'headset' && <MdOutlineHeadsetMic color={color} size={size} />}
      {name === 'chevron-down' && <FiChevronDown color={color} size={size} />}
    </>
  );
};

export default Icon;
