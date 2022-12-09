import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Loading from "../components/Loading/Loading";
import {
  Container,
  Dropzone,
  Form,
  ImageAsset,
  Label,
  Required,
  RequiredWrapper,
  TextArea,
  Title,
  TitleWrapper,
} from "../styles/Mint.styled";

export default function Mint({ alchemy }) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onAddfiles = useCallback((acceptedFiles: File[]) => {
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setImageUrl(imageUrl);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 1,
    maxSize: 8000000,
    onDrop: onAddfiles,
  });

  return (
    <Container>
      <Form>
        <TitleWrapper>
          <Title>Mint to Mumbai</Title>
        </TitleWrapper>
        <Loading isLoading={isLoading} />
        <RequiredWrapper>
          <Label htmlFor="image">Image</Label>
          <Required>*</Required>
        </RequiredWrapper>
        <Dropzone {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
          <input id="image" {...getInputProps()} />
          <ImageAsset style={{ backgroundImage: `url(${imageUrl})` }}>
            {!imageUrl && <p>Drag and drop, or click to select</p>}
          </ImageAsset>
        </Dropzone>
        <RequiredWrapper>
          <Label htmlFor="nft-name">Name</Label>
          <Required>*</Required>
        </RequiredWrapper>
        <Input
          type="text"
          id="nft-name"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="description">Description</Label>
        <TextArea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Button
          type="button"
          onClick={() => toast.warning("Functionality not implemented yet. Sorry, I'm working on it!")}
        >
          Mint to Mumbai
        </Button>
      </Form>
    </Container>
  );
}
