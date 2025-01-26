const printContent = (content: Array<string>) => {
  return content.map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>;
  });
};

export default printContent;
