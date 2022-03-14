# -*- coding: utf-8 -*-
#
# Copyright (C) 2022 Northwestern University.
#
# Invenio-Communities is free software; you can redistribute it and/or modify
# it under the terms of the MIT License; see LICENSE file for more details.

"""Community base error."""


class CommunityError(Exception):
    """Base exception for community errors."""


class CommunityHidden(CommunityError):
    """Exception raised to mask community presence over permision denial."""