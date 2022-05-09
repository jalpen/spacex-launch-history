const TextTrimmer = (props) => {
  var text = props.children;
  var length = props.length;
  var suffix = props.suffix;
  var trimedText = '';
  if (props.children) trimedText = text.slice(0, length) + suffix;
  return <>{trimedText}</>;
};

export default TextTrimmer;
