const buttons = [
  {
    title: 'Bold',
    image: require('./svg/bold.svg'),
    onClick: toggleBold,
    checked: format => format.isBold,
  },
  {
    title: 'Italic',
    image: require('./svg/italic.svg'),
    onClick: toggleItalic,
    checked: format => format.isItalic,
  },
  {
    title: 'Underline',
    image: require('./svg/underline.svg'),
    onClick: toggleUnderline,
    checked: format => format.isUnderline,
  },
  {
    title: 'Font Size',
    image: require('./svg/fontsize.svg'),
    onClick: toggleUnderline,
    checked: format => format.isUnderlines,
    dropDownItems: {
      '8pt': '8',
      '10pt': '10',
      '12pt': '12',
      '16pt': '16',
      '20pt': '20',
      '36pt': '36',
      '72pt': '72',
    }
  }
];