import React from 'react';
import _ from 'lodash';
import {func, bool} from 'prop-types';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import {SEARCH_SCHEMA} from '../../constants/validationSchemas';

const SearchForm = ({searchGnomeByName, loading}) => {
  const {
    register,
    handleSubmit,
    // errors
  } = useForm({
    resolver: yupResolver(SEARCH_SCHEMA),
  });

  const onSubmit = data => {
    searchGnomeByName(_.capitalize(data.searchGnomeText));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                disabled={loading}
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
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchGnomeByName: func.isRequired,
  loading: bool.isRequired,
};

export default SearchForm;
