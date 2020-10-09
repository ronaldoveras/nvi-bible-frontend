const { useState } = require("react");
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as S from './styles'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import { Typography } from '@material-ui/core';

const Home = ({ books }) => {

  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [selectedVerse, setSelectedVerse] = useState("");

  async function buscarVerse() {
    const res = await fetch('https://nameless-mesa-59302.herokuapp.com/api/v1/nvi?id=' + book + '&cap=' + chapter + '&vs=' + verse)
    const json = await res.text()
    setSelectedVerse(json)
    return { props: { selectedVerse: json } }

  };


  function onChangeBook(optionSelected) {
    setBook(optionSelected.target.value);
    return;
  };

  function onChangeChapter(optionSelected) {
    setChapter(optionSelected.target.value);
    return;
  };

  function onChangeVerse(optionSelected) {
    setVerse(optionSelected.target.value);
    return;
  };


  return (
    <S.Container>
      {/* <Header title='NVI' /> */}
      <S.FormSection >
        <label htmlFor="book-select">Choose a Book: </label>
        <S.StyledSelect
          id="book-select"
          value={book}
          onChange={onChangeBook}
        >
          {books.map((value) => {
            return <option key={value} value={value}>{value}</option>
          })}

        </S.StyledSelect>
        <label htmlFor="chapter-select">Choose a Chapter: </label>
        <S.StyledSelect
          id="chapter-select"
          value={chapter}
          onChange={onChangeChapter}
        >
          {[...Array(60).keys()].map(i => {
            i + 1;
            return <option key={i} value={i}>{i}</option>
          })}
        </S.StyledSelect>
        <label htmlFor="verse-select">Choose a Verse: </label>
        <S.StyledSelect
          id="verse-select"
          value={verse}
          onChange={onChangeVerse}
        >
          {[...Array(60).keys()].map(i => {
            i + 1;
            return <option key={i} value={i}>{i}</option>
          })}
        </S.StyledSelect>
      </S.FormSection>

      <S.CentralizedSection>
        <S.SearchButton onClick={buscarVerse}>Search</S.SearchButton>
        <S.ContextButton>Contexto</S.ContextButton>
      </S.CentralizedSection>

      <S.CentralizedSection>
        <S.Card >
          <CardContent >
            <Typography variant="h5" component="h2">
              Selected Verse
            </Typography>
            <Typography color="textSecondary" variant="h2" >
              {book} {chapter}:{verse}
            </Typography>
            <Typography variant="h5" color="textPrimary" >
              {selectedVerse}
            </Typography>

          </CardContent>
        </S.Card>
      </S.CentralizedSection>
      <S.CentralizedSection>
        <Footer />
      </S.CentralizedSection>

    </S.Container>

  );
}

export default Home




export async function getStaticProps() {
  const res = await fetch('https://nameless-mesa-59302.herokuapp.com/api/v1/books')
  const json = await res.json()
  console.log(json)
  //return { books: json }
  return { props: { books: json } }
};


