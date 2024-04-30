const formatStringToJSX = (content: string) => {
    // Busca patrones de texto rodeados por '**' y '_'
    const formattedString = content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // negrita
        .replace(/_(.*?)_/g, '<em>$1</em>'); // cursiva
    return <p dangerouslySetInnerHTML={{ __html: formattedString }} />;
};


export default formatStringToJSX;
