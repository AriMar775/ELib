import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import Nav from "../../../common/Nav/Container";
import Input from "../../../common/Inputs/CommonInput";
import InputFile from "../../../common/Inputs/InputFile/Container";
import InputProgress from "../../../common/Inputs/InputProgress/Container";
import Radio from "../../../common/Inputs/Radio/Container";
import BlueBtn from "../../../common/Buttons/BlueBtn";
import FlatBtn from "../../../common/Buttons/FlatBtn";
import WhiteBtn from "../../../common/Buttons/WhiteBtn";
import { categories } from "../../../constants";
import {
  MainWrapper,
  HWrapper,
  VWrapper,
  Mark,
  InputWrapper,
  LabelInput,
  BtnWrapper,
  ConfirmBtnWrapper,
  SubmitBtn,
  HiddenSeriesFieldWrapper,
  HiddenCollectionsFieldWrapper,
  HiddenFinishDateFieldWrapper,
  HiddenProgressFieldWrapper,
  CurrentFieldValueWrapper,
  HiddenProgressPercentFieldWrapper,
  HiddenProgressPagesFieldWrapper,
} from "./styles";

const AddBook = ({
  handleSubmit,
  handleAddSeriesBtn,
  handleAddCollectionBtn,
  handleToggle,
  isShowSeries,
  isShowCollection,
  location,
  coverValue,
  seriesValue,
  collectionValue,
  isShowFinishDate,
  isShowProgress,
  isProgressInPercent,
  progressName,
  back,
  ...props
}) => {
  return (
    <Nav>
      <form onSubmit={handleSubmit}>
        <MainWrapper>
          <HWrapper>
            <Field name="cover" component={InputFile} srcValue={coverValue} />

            <VWrapper>
              <HWrapper>
                <Field
                  name="name"
                  component={Input}
                  label="Название"
                  type="text"
                  placeholder="Владычица Озера"
                  width="213px"
                />

                <Field
                  name="author"
                  component={Input}
                  label="Автор"
                  type="text"
                  placeholder="Анджей Сапковский"
                  width="213px"
                />
              </HWrapper>

              <HWrapper>
                <Field
                  name="releaseDate"
                  component={Input}
                  label="Дата выхода"
                  type="date"
                  placeholder=""
                  width="213px"
                />

                <InputWrapper>
                  <Field
                    name="bookSize"
                    component={Input}
                    label="Объём"
                    type="number"
                    placeholder="544"
                    width="93px"
                  />
                  <Mark>стр.</Mark>
                </InputWrapper>

                <InputWrapper>
                  <Field
                    name="textSize"
                    component={Input}
                    label="Размер текста"
                    type="select"
                    width="93px"
                  />
                </InputWrapper>
              </HWrapper>

              <HWrapper>
                <VWrapper>
                  <InputWrapper>
                    <LabelInput>Серия</LabelInput>
                    <BtnWrapper>
                      <Link
                        to={{
                          pathname: "/select-series-modal",
                          state: { background: location },
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <Field
                          name="series"
                          component={FlatBtn}
                          children="Выбрать"
                        />
                      </Link>
                      <FlatBtn width="30px" onClick={handleAddSeriesBtn}>
                        {!isShowSeries ? "+" : "×"}
                      </FlatBtn>
                    </BtnWrapper>
                  </InputWrapper>
                  <CurrentFieldValueWrapper>
                    {seriesValue}
                  </CurrentFieldValueWrapper>
                </VWrapper>

                <VWrapper marginBottom="16px">
                  <InputWrapper>
                    <LabelInput>Коллекция</LabelInput>
                    <BtnWrapper>
                      <Link
                        to={{
                          pathname: "/select-collections-modal",
                          state: { background: location },
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <Field
                          name="collection"
                          component={FlatBtn}
                          children="Выбрать"
                        />
                      </Link>

                      <FlatBtn width="30px" onClick={handleAddCollectionBtn}>
                        {!isShowCollection ? "+" : "×"}
                      </FlatBtn>
                    </BtnWrapper>
                  </InputWrapper>
                  <CurrentFieldValueWrapper>
                    {collectionValue}
                  </CurrentFieldValueWrapper>
                </VWrapper>
              </HWrapper>

              <HiddenSeriesFieldWrapper isShowSeries={isShowSeries}>
                <Field
                  name="series"
                  component={Input}
                  label="Название серии"
                  type="text"
                  placeholder="Сага о ведьмаке"
                  width="213px"
                />
              </HiddenSeriesFieldWrapper>

              <HiddenCollectionsFieldWrapper
                isShowCollection={isShowCollection}
              >
                <Field
                  name="collection"
                  component={Input}
                  label="Название Коллекции"
                  type="text"
                  placeholder="Ведьмак"
                  width="213px"
                />
              </HiddenCollectionsFieldWrapper>

              <HWrapper>
                <InputWrapper>
                  <LabelInput>Категория</LabelInput>
                  <BtnWrapper>
                    <Field
                      name="category"
                      component={Radio}
                      values={categories}
                    />
                  </BtnWrapper>
                </InputWrapper>
              </HWrapper>

              <HiddenFinishDateFieldWrapper isShowFinishDate={isShowFinishDate}>
                <Field
                  name="finishDate"
                  component={Input}
                  label="Дата прочтения"
                  type="date"
                  placeholder=""
                  width="213px"
                />
              </HiddenFinishDateFieldWrapper>

              <HiddenProgressFieldWrapper isShowProgress={isShowProgress}>
                <HiddenProgressPercentFieldWrapper
                  isProgressInPercent={isProgressInPercent}
                >
                  <Field
                    name="progressPercent"
                    component={InputProgress}
                    label="Прогресс, %"
                    placeholder="146"
                    width="93px"
                  />
                </HiddenProgressPercentFieldWrapper>

                <HiddenProgressPagesFieldWrapper
                  isProgressInPercent={isProgressInPercent}
                >
                  <Field
                    name="progressPages"
                    component={InputProgress}
                    label="Прогресс, стр."
                    placeholder="146"
                    width="93px"
                  />
                </HiddenProgressPagesFieldWrapper>

                <FlatBtn width="30px" onClick={handleToggle}>
                  {isProgressInPercent ? "стр." : "%"}
                </FlatBtn>
              </HiddenProgressFieldWrapper>
            </VWrapper>
          </HWrapper>

          <HWrapper>
            <Field
              name="annotation"
              component={Input}
              isNotTextArea={true}
              label="Аннотация"
              placeholder="Финалочка"
            />
            <Field
              name="advantages"
              component={Input}
              isNotTextArea={true}
              label="Плюсы"
              placeholder="Сеттинг"
            />
          </HWrapper>
          <HWrapper>
            <Field
              name="disadvantages"
              component={Input}
              isNotTextArea={true}
              label="Минусы"
              placeholder="Затянутость"
            />
            <Field
              name="comment"
              component={Input}
              isNotTextArea={true}
              label="Комментарий"
              placeholder="Советовать всем"
            />
          </HWrapper>
          <ConfirmBtnWrapper>
            <SubmitBtn type="submit">
              <BlueBtn width="163px" height="40px" type="submit">
                Сохранить
              </BlueBtn>
            </SubmitBtn>

            <WhiteBtn width="155px" height="40px" onClick={back}>
              Отменить
            </WhiteBtn>
          </ConfirmBtnWrapper>
        </MainWrapper>
      </form>
    </Nav>
  );
};

export default reduxForm({
  form: "AddBookForm",
  initialValues: {
    textSize: "small",
  },
})(AddBook);
