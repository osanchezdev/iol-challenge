import React from 'react';
import {func} from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import {SEARCH_SCHEMA} from '../../constants/validationSchemas';

const SearchForm = ({searchGnomeByName}) => {
  const {
    register,
    handleSubmit,
    // errors
  } = useForm({
    resolver: yupResolver(SEARCH_SCHEMA),
  });

  const onSubmit = data => {
    searchGnomeByName(data.searchGnomeText);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                size="lg"
                placeholder="Gnome name"
                aria-label="Gnome name"
                aria-describedby="basic-addon2"
                ref={register}
                name="searchGnomeText"
              />
              <InputGroup.Append size="lg">
                <Button type="submit" variant="outline-secondary">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        {/*  <Row>
      <Col>
        <Col>More filters</Col>
      </Col>
    </Row> */}
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchGnomeByName: func.isRequired,
};

export default SearchForm;
