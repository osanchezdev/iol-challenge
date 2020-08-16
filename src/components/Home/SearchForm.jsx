import React, {useContext} from 'react';
import _ from 'lodash';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import {GnomesContext} from '../../context/gnomesContext';
import {SEARCH_SCHEMA} from '../../constants/validationSchemas';

const SearchForm = () => {
  const {filteredGnomes, searchGnomeByName} = useContext(GnomesContext);
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
                disabled={!filteredGnomes}
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

export default SearchForm;
