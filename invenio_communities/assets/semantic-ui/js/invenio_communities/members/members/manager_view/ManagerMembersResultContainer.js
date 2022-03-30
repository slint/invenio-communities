/*
 * This file is part of Invenio.
 * Copyright (C) 2022 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react";
import { Table, Checkbox, Dropdown, Menu } from "semantic-ui-react";
import { i18next } from "@translations/invenio_communities/i18next";

export const ManagerMembersResultsContainer = ({ results }) => {
  const options = [
    { key: 1, text: "Choice 1", value: 1 },
    { key: 2, text: "Choice 2", value: 2 },
    { key: 3, text: "Choice 3", value: 3 },
  ];
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={7}>
            <Checkbox className="mr-10" />
            <Menu compact>
              <Dropdown text="Dropdown" options={options} simple item/>
            </Menu>
          </Table.HeaderCell>
          <Table.HeaderCell width={2}>
            {i18next.t("Member since")}
          </Table.HeaderCell>
          <Table.HeaderCell width={2}>
            {i18next.t("Visibility")}
          </Table.HeaderCell>
          <Table.HeaderCell width={2}>{i18next.t("Role")}</Table.HeaderCell>
          <Table.HeaderCell width={2} />
        </Table.Row>
      </Table.Header>
      <Table.Body>{results}</Table.Body>
    </Table>
  );
};